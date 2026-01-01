// Type definitions for the API response
export interface Campaign {
    id: number;
    judul_campaign: string;
    artikel_campaign: string;
    banner_url: string;
    target_pencapaian: number;
    lembaga_yayasan: string;
    sumber: string;
    status: string;
    lokasi: string;
    tabel_kategori_id: number;
    tabel_sekala_prioritas_id: number;
    gabung_fr: number;
    like: number;
    created_at: string;
    updated_at: string;
}

// Transformed campaign for UI components
export interface UICampaign {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    raised: string;
    goal: string;
    percentage: number;
    organization?: string;
    location?: string;
    status?: string;
    badge?: string;
    badgeColor?: string;
}

export async function fetchCampaigns(): Promise<Campaign[]> {
    try {
        const response = await fetch('https://my.kebaikanummat.id/api/program', {
            next: { revalidate: 60 }, // Revalidate every 60 seconds
        });

        if (!response.ok) {
            throw new Error('Failed to fetch campaigns');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching campaigns:', error);
        return [];
    }
}

export async function fetchCampaignById(id: string): Promise<Campaign | null> {
    try {
        const response = await fetch(`https://my.kebaikanummat.id/api/program/${id}`, {
            next: { revalidate: 60 },
        });

        if (!response.ok) {
            return null;
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching campaign ${id}:`, error);
        return null;
    }
}

export function transformCampaign(campaign: Campaign): UICampaign {
    // Calculate percentage (using gabung_fr as raised amount, or default to random)
    const raised = campaign.gabung_fr || 0;
    const goal = campaign.target_pencapaian || 10000;
    const percentage = goal > 0 ? Math.round((raised / goal) * 100) : 0;

    // Format currency (Indonesian Rupiah)
    const formatIDR = (amount: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(amount);
    };

    // Determine badge based on priority or status
    let badge = '';
    let badgeColor = 'green';

    if (campaign.tabel_sekala_prioritas_id === 1) {
        badge = 'URGENT';
        badgeColor = 'green';
    } else if (campaign.tabel_kategori_id === 2) {
        badge = 'EDUCATION';
        badgeColor = 'blue';
    } else if (campaign.tabel_kategori_id === 3) {
        badge = 'MEDICAL';
        badgeColor = 'red';
    }

    // Strip HTML tags from article for plain text description
    const stripHtml = (html: string) => {
        return html.replace(/<[^>]*>/g, '').substring(0, 150) + '...';
    };

    return {
        id: campaign.id.toString(),
        title: campaign.judul_campaign,
        description: stripHtml(campaign.artikel_campaign),
        imageUrl: `https://my.kebaikanummat.id/storage/${campaign.banner_url}`,
        raised: formatIDR(raised),
        goal: formatIDR(goal),
        percentage,
        organization: campaign.lembaga_yayasan,
        location: campaign.lokasi,
        status: campaign.status,
        badge,
        badgeColor,
    };
}
