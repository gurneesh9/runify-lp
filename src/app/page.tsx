import { LandingPageComponent } from "@/components/landing-page"; // Adjust the path as necessary

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Render only the LandingPageComponent */}
      <LandingPageComponent />
    </div>
  );
}
