export async function POST(req) {
    try {
      const { roleTitle, linkedinProfiles, industryContext } = await req.json();
  
      if (!roleTitle) {
        return new Response(JSON.stringify({ error: "Role title is required" }), { status: 400 });
      }
  
      const response = await fetch("http://15.206.194.28:4000/api/persona/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ roleTitle, linkedinProfiles, industryContext }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch persona");
      }
  
      const data = await response.json();
      return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
      console.error("Error:", error.message);
      return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
  }
  