import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const keyword = searchParams.get("keyword");
 
  let params;
  keyword
    ? (params = {
        format: "json",
        nojsoncallback: 1,
        tags: keyword,
      })
    : (params = {
        format: "json",
        nojsoncallback: 1,
      });
  try {
    const response = await axios.get(
      "https://www.flickr.com/services/feeds/photos_public.gne",
      { params }
    );

    const images = response.data.items.map((item: any) => ({
      title: item.title,
      media: item.media && item.media.m ? item.media.m : "",
    }));

    return NextResponse.json(images);
  } catch (error) {
    return NextResponse.json({ error: "Server Error" });
  }
}
