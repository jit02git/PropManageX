export async function GET(request, { params }) {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/properties/${params.id}`
      );
      const data = await response.json();
      return new Response(JSON.stringify(data), {
        status: response.status,
      });
    } catch (error) {
      return new Response(JSON.stringify({ message: error.message }), {
        status: 500,
      });
    }
  }
  
  export async function PUT(request, { params }) {
    try {
      const body = await request.json();
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/properties/${params.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        }
      );
      const data = await response.json();
      return new Response(JSON.stringify(data), {
        status: response.status,
      });
    } catch (error) {
      return new Response(JSON.stringify({ message: error.message }), {
        status: 500,
      });
    }
  }
  
  export async function DELETE(request, { params }) {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/properties/${params.id}`,
        { method: 'DELETE' }
      );
      return new Response(null, { status: 204 });
    } catch (error) {
      return new Response(JSON.stringify({ message: error.message }), {
        status: 500,
      });
    }
  }