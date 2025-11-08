import { env } from "@/config/env.config";
import { fileToBuffer, getFileName, getFileType } from "@/utils/file.util";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3"
import { Credentials } from "@aws-sdk/types";

const options = {
  keyPrefix: "uploads/",
  bucket: env.AWS_S3_BUCKET_NAME,
  region: env.AWS_REGION,
  successActionStatus: 201
}

let credentials: Credentials = {
  accessKeyId: env.AWS_ACCESS_KEY,
  secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
}
const client = new S3Client({
  region: options.region,
  credentials: credentials
})
  
const awsHelper = {
   uploadFile: async function (path: string): Promise<string | undefined> {
    try {
      const fileBuffer = await fileToBuffer(path);

      const file = {
        key: path,
        name: getFileName(path),
        type: getFileType(path)
      };

      const s3Key = options.keyPrefix + file.name;

      await client.send(new PutObjectCommand({
        Bucket: options.bucket,
        Key: s3Key,
        Body: fileBuffer,
        ContentType: file.type,
      }));

      const url = `https://${options.bucket}.s3.${options.region}.amazonaws.com/${s3Key}`;
      console.log(url)
      return url;

    } catch (error) {
      console.log("Upload failed:", error);
      return undefined;
    }
  }
}


export default awsHelper;