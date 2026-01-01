import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import CampaignCard from "@/components/CampaignCard";
import CategoryFilter from "@/components/CategoryFilter";
import CampaignListItem from "@/components/CampaignListItem";
import BottomNav from "@/components/BottomNav";
import HorizontalCarousel from "@/components/HorizontalCarousel";
import { fetchCampaigns, transformCampaign } from "@/lib/api";

// Mock data for categories
const categories = [
  { id: "all", name: "All", icon: "grid_view", color: "" },
  {
    id: "environment",
    name: "Environment",
    icon: "eco",
    color: "text-green-600",
  },
  { id: "education", name: "Education", icon: "school", color: "text-blue-500" },
  {
    id: "medical",
    name: "Medical",
    icon: "medical_services",
    color: "text-red-500",
  },
  { id: "animals", name: "Animals", icon: "pets", color: "text-orange-500" },
];

export default async function Home() {
  // Fetch campaigns from API
  const campaigns = await fetchCampaigns();
  const transformedCampaigns = campaigns.map(transformCampaign);

  // Use last 5 campaigns as featured, and show all campaigns in ongoing
  const totalCampaigns = transformedCampaigns.length;
  const featuredCampaigns = transformedCampaigns.slice(Math.max(0, totalCampaigns - 5));
  const ongoingCampaigns = transformedCampaigns;

  return (
    <div className="min-h-screen pb-24">
      <Header />
      <SearchBar />

      {/* Featured Campaigns */}
      <section className="flex flex-col gap-3 py-4">
        <div className="flex items-center justify-between px-4">
          <h2 className="text-xl font-bold tracking-tight">
            Featured Campaigns
          </h2>
          <a
            className="text-sm font-bold text-primary hover:text-green-600 transition-colors"
            href="#"
          >
            See All
          </a>
        </div>
        {/* Horizontal Scroll Container with Arrows */}
        {featuredCampaigns.length > 0 ? (
          <HorizontalCarousel>
            {featuredCampaigns.map((campaign) => (
              <CampaignCard key={campaign.id} {...campaign} />
            ))}
          </HorizontalCarousel>
        ) : (
          <p className="text-gray-500 px-4">No featured campaigns available</p>
        )}
      </section>

      {/* Categories */}
      <CategoryFilter categories={categories} activeCategory="all" />

      {/* Ongoing Campaigns */}
      <section className="flex flex-col gap-4 py-4 px-4">
        <h3 className="text-lg font-bold tracking-tight text-[#111813]">
          Ongoing Campaigns
        </h3>
        {ongoingCampaigns.length > 0 ? (
          ongoingCampaigns.map((campaign) => (
            <CampaignListItem key={campaign.id} {...campaign} />
          ))
        ) : (
          <p className="text-gray-500">No ongoing campaigns available</p>
        )}
      </section>

      {/* Bottom Navigation */}
      <BottomNav activeItem="home" />
    </div>
  );
}
