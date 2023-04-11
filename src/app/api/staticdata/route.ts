import { getStaticData } from "@lib/post";



export async function POST(request: Request,response:Response) {
    const {fileName}= await request.json()
    const paresedData = getStaticData(fileName)
    return new Response(JSON.stringify(paresedData),{
        status:201,
        statusText:"Super"
    });
  }