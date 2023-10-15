import type { NextApiResponse } from "next";
import axios from "axios";

export async function GET(req: any, res: NextApiResponse) {
  const url = new URL(req.url);

  const ValueSet = url.searchParams.get("ValueSet");
  const TextSearch = url.searchParams.get("TextSearch");

  const data = await axios
    .post("http://terminologieserver.collombon.org/TextSearch", {
      ValueSet: ValueSet,
      TextSearch: TextSearch,
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      // Handle any errors
      console.error(error);
    });

  return Response.json(data);
}
