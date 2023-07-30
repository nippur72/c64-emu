import { loadBytes } from "./filesystem";

export async function fetchProgram(name: string)
{
   //console.log(`wanting to load ${name}`);
   try
   {
      const response = await fetch(`software/${name}`);
      if(response.status === 404) return false;
      const bytes = new Uint8Array(await response.arrayBuffer());
      loadBytes(bytes);
   
      return true;
   }
   catch(err)
   {
      return false;      
   }
}

