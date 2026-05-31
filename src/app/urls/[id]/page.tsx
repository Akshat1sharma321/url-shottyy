import { UrlShortenerService } from "@/src/services/urlShortenerService";
import { redirect } from "next/navigation";

async function fetchOriginalURL(url: string) {
  const urlService = new UrlShortenerService();
  const response = await urlService.getUrlByShortUrl(url);
  return response?.originalUrl;
}

export default async function urlRedirect({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  console.log(id);
  const original = await fetchOriginalURL(id);
  if (original) {
    redirect(original);
  }

  redirect("/404");
  return null;
}
