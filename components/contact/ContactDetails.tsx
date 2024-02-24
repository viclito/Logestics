"useClient"
import Image from 'next/image'
import React, { useState ,ChangeEvent} from 'react'
// import contactpng from '../../public/assets/contpng.png'
import contactpng from '../../public/assets/Designer.png'
import gmail from '../../public/assets/gmail.png'
import { Button, FormControl, FormLabel, Paper, Stack, TextField, Typography } from '@mui/material'
import { sendContactForm } from '../../lib/api'

const ContactDetails = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [phoneNumberError, setPhoneNumberError] = useState<boolean>(false);
    const [emailError, setEmailError] = useState<boolean>(false);
    const [Error, setError] = useState<string | null>(null);
    
  

    const handlePhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
       
        const isValid = /^\d*$/.test(inputValue);
        setPhoneNumber(inputValue);
        setPhoneNumberError(!isValid);
    };
    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue: string = event.target.value;
         
        const isValid: boolean = /^\S+@\S+\.\S+$/.test(inputValue);
        setEmail(inputValue);
        setEmailError(!isValid);
    }
    const handleNameChange = (event:ChangeEvent<HTMLInputElement>)=>{
        const inputValue: string = event.target.value;
        setName(inputValue)
    }
    const handleMessageChange = (event:ChangeEvent<HTMLInputElement>)=>{
        const inputValue: string = event.target.value;
        setMessage(inputValue)
    }

    // const handleSubmit = (e:any) => {
    
    //     sendContactForm(email,name,phoneNumber, message)
      
  
    // }
    const isFormValid = () => {
        // Add validation logic based on your requirements
        const isEmailValid: boolean = /^\S+@\S+\.\S+$/.test(email);
        const isValidPhoneNumber: boolean = /^\d*$/.test(phoneNumber);
        return (
            name.trim() !== '' &&
            email.trim() !== '' &&
            isEmailValid &&
            phoneNumber.trim() !== '' &&
            isValidPhoneNumber &&
            message.trim() !== ''
        )
      };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!isFormValid()) {
            // Handle invalid form, e.g., show an error message
            console.log('Please fill in all required fields');
            setError('Please Fill the Form')
            return;
          }
      
        const formData = {
          email: email, // Replace with the actual email value
          name: name,             // Replace with the actual name value
          phoneNumber: phoneNumber,     // Replace with the actual phoneNumber value
          message: message, // Replace with the actual message value
        };
      
        try {
          await sendContactForm(formData);
          // Handle success, e.g., show a success message or navigate to another page
          setPhoneNumber('')
          setName('')
          setEmail('')
          setMessage('')
          setSuccessMessage('Our Team will Shortly Contact You');
          setError('')
          console.log('Form submitted successfully!')

        } catch (error) {
          // Handle error, e.g., show an error message
          console.error('Error submitting form:', error);
        }

        
      };


  return (
    <>
        <div className='w-screen relative'>
            <Image src={contactpng} alt='' className='fixed w-screen h-screen z-0 opacity-20'/>
            <div className='max-w-[1400px] mx-auto py-10 px-6 relative z-10'>
                <h1 className='font-bold text-4xl lg:text-3xl md:text-2xl py-4 text-center'>Feel Free To <span className='text-primary'>Contact Us</span></h1>
                <p className='max-w-[900px] mx-auto text-primary text-sm font-semibold text-center'>If you have any questions about what we offer for consumers or for business, you can always email us or call us via the below details. We’ll reply within 24 hours.</p>

                <div className='flex max-w-[1000px] mx-auto gap-4 items-center pt-20 md:flex-col md:gap-10'>
                    {/* left */}
                    <div className='w-[50%] flex flex-col gap-4 md:w-[100%]'>
                        <div className='flex flex-col gap-2'>
                            <h2 className='text-base font-bold'>Visit our office</h2>
                            <p className='text-sm font-semibold max-w-[400px]'>No.36/239,Door no.307,Angappa Naicken Streer,Mannady,Chennai-600 001</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h2 className='text-base font-bold'>Call us on</h2>
                            <p className='text-sm font-semibold max-w-[400px]'> <a href="tel:9176202876">+9176202876</a></p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h2 className='text-base font-bold'>Mail Us at</h2>
                            <div className='text-sm font-semibold max-w-[400px]'>
                                <a href="mailto:ebinjacob@jlogistics.in" target='_blank' className='flex items-center gap-2'>
                                    <Image src={gmail} alt='' className='w-6 h-6'/>
                                    <span>ebinjacob@jlogistics.in</span>
                                </a>
                            </div>
                            <div className='text-sm font-semibold max-w-[400px]'>
                                <a href="mailto:imports@jlogistics.in" target='_blank' className='flex items-center gap-2'>
                                    <Image src={gmail} alt='' className='w-6 h-6'/>
                                    <span>imports@jlogistics.in</span>
                                </a>
                            </div>
                        </div>
                    </div>


                    {/* right */}

                    <div className='w-[50%] md:w-[100%] flex items-center'>
                        <Paper sx={{padding:2}}>
                        <FormControl>
                            
                            <Stack spacing={2}>

                                <FormLabel>Write Your Query , We will Contact you Soon</FormLabel>

                                <TextField label='Name' size='small' helperText=''
                                    value={name}
                                    onChange={handleNameChange}
                                    required

                                />
                                <TextField label='Email' size='small' 
                                value={email}
                                onChange={handleEmailChange}
                                error={emailError}
                                helperText={emailError?'Please enter a valid email':''}
                                required
                                />


                                <TextField label='Phone Number' type='tel' size='small'
                                required
                                 value={phoneNumber}
                                 onChange={handlePhoneNumberChange}
                                 error={phoneNumberError}
                                 helperText={phoneNumberError ? 'Please enter a valid number' : ' '}
                                 InputProps={{
                                    inputProps: {
                                    pattern: '[0-9]*',
                                    maxLength: 10,
                                    },
                                }}/>
                                <TextField label='Message'
                                required
                                    maxRows={3}
                                    minRows={3}
                                    value={message}
                                    onChange={handleMessageChange}
                                  />
                                  <Button sx={{display:'inline-block'}} onClick={handleSubmit}>Submit</Button>
                            </Stack>
                            
                        </FormControl>
                            {successMessage && <p className='text-center text-green-500 text-xs font-normal'>{successMessage}</p>}
                            {Error && <p className='text-center text-red-500 text-xs font-normal'>{Error}</p>}
                        </Paper>
                        
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ContactDetails