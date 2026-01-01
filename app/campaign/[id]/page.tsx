import { fetchCampaignById, transformCampaign } from "@/lib/api";
import CampaignDetailsClient from "./CampaignDetailsClient";
import { notFound } from "next/navigation";

interface CampaignPageProps {
    params: Promise<{ id: string }>;
}

export default async function CampaignDetails({ params }: CampaignPageProps) {
    // Await params (Next.js 15 requirement)
    const { id } = await params;

    // Fetch campaign from API
    const campaign = await fetchCampaignById(id);

    if (!campaign) {
        notFound();
    }

    // Transform the campaign data
    const transformedCampaign = transformCampaign(campaign);

    // Pass the full campaign object with additional fields
    const campaignData = {
        ...transformedCampaign,
        article: campaign.artikel_campaign,
        organization: campaign.lembaga_yayasan,
        location: campaign.lokasi,
        category: getCategoryName(campaign.tabel_kategori_id),
        updatesCount: 0, // This can be fetched from another endpoint if available
        donors: Math.max(Math.floor(campaign.gabung_fr / 50000), 1), // Estimate donors based on amount
        lastDonation: 'recently', // This would come from another endpoint
    };

    return <CampaignDetailsClient campaign={campaignData} />;
}

function getCategoryName(id: number): string {
    const categories: { [key: number]: string } = {
        1: 'Environmental',
        2: 'Education',
        3: 'Medical',
        4: 'Animals',
    };
    return categories[id] || 'General';
}
