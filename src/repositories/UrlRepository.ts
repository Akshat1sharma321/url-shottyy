import Url, { IURL } from "../models/Url";
import connect_mongoDB from "../config/db";
export default class UrlRepository {
  private urlModel = Url;

  private async connect() {
    await connect_mongoDB();
  }

  async getUrlByID(id: string): Promise<IURL | null> {
    await this.connect();
    return await this.urlModel.findById(id).lean();
  }

  async getUrlByShortUrl(shortUrl: string): Promise<IURL | null> {
    await this.connect();
    return await this.urlModel.findOne({ shortUrl }).lean();
  }

  async getUrlByOriginalUrl(originalUrl: string): Promise<IURL | null> {
    await this.connect();
    return await this.urlModel.findOne({ originalUrl }).lean();
  }

  async getAllUrls(): Promise<IURL[] | null> {
    await this.connect();
    return await this.urlModel.find().lean();
  }

  async deleteUrl(id: string): Promise<IURL | null> {
    await this.connect();
    return await this.urlModel.findByIdAndDelete(id).lean();
  }

  async createUrl(originalUrl: string, shortUrl: string): Promise<IURL> {
    await this.connect();
    console.log("originalUrl:", originalUrl);
    console.log("shortUrl:", shortUrl);

    return await this.urlModel.create({ originalUrl, shortUrl });
  }
}
