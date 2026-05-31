import { UrlShortenerService } from "@/src/services/urlShortenerService";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const shortenerService = new UrlShortenerService();
    const urls = await shortenerService.getAllUrls();
    const response = NextResponse.json({ urls });
    response.headers.set(
      "Cache-Control",
      "public, max-age=60, s-maxage=60, stale-while-revalidate=59",
    );
    return response;
  } catch (error) {
    console.error("Failed to fetch URLs:", error);
    return NextResponse.json(
      { error: "Unable to retrieve URLs" },
      { status: 500 },
    );
  }
}
