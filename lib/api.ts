interface ContactFormData {
    // Define the structure of your contact form data
    name: string;
    email: string;
    phoneNumber:string;
    message:String;
    // Add other properties as needed
  }
  
  export const sendContactForm = async (data: ContactFormData): Promise<Response> => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });
  
    // You may want to handle the response here or return it to the caller
    return response;
  };