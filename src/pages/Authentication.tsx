// Packages:
import { useState } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

// Imports:
import GoogleIcon from '../icons/GoogleIcon'
import { Mail } from 'lucide-react'

// Components:
import { Button } from '../components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../components/ui/form'
import { Input } from '../components/ui/input'
import LoadingIcon from '../components/primary/LoadingIcon'

const Authentication = () => {
  // Constants:
  const schema = z.object({
    emailAddress: z.string()
      .min(2, 'Email address must contain at least 2 character(s)')
      .max(50, 'Email address cannot contain more than 50 character(s)')
      .email('Please enter a valid email address'),
    password: z.string()
      .min(8, 'Password must be at least 8 characters long')
      .max(32, 'Password must not exceed 32 characters')
      .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
      .regex(/[0-9]/, 'Password must contain at least one number')
      .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character'),
  })

  // State:
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      emailAddress: '',
      password: '',
    },
    mode: 'onBlur',
  })
  const [isAuthenticationUnderway, setIsAuthenticationUnderway] = useState(false)
  const [isAuthenticationUnderwayWithGoogle, setIsAuthenticationUnderwayWithGoogle] = useState(false)
  return (
    <main className='pt-16 relative grid grid-cols-2 justify-center items-center w-full h-screen bg-white text-brand-primary'>
      <div className='w-full h-full bg-slate-100 p-12 flex flex-col justify-end'>
        <h3>This App Doesn&apos;t Suck Dick</h3>
      </div>
      {/*Form Div Ahead*/}
      <div className='flex justify-center items-center flex-col w-full'>
        <h1 className='text-4xl font-semibold text-center'>Welcome to OpenReply</h1>
        <p className='mt-2 text-sm font-medium text-brand-secondary text-center'>Join the internet’s comment section</p>
        <div className='flex flex-col w-96 mt-8'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(()=>{console.log("Placeholder")})} className='space-y-5'>
              <FormField
                control={form.control}
                name='emailAddress'
                disabled={isAuthenticationUnderway || isAuthenticationUnderwayWithGoogle}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input
                        id='email'
                        type='email'
                        autoComplete='email'
                        placeholder='name@example.com'
                        aria-describedby='email-error'
                        required
                        {...field}
                      />
                    </FormControl>
                    <FormMessage id='email-error' className='text-xs' />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                disabled={isAuthenticationUnderway || isAuthenticationUnderwayWithGoogle}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        id='password'
                        type='password'
                        placeholder='•••••••••'
                        aria-describedby='password-error password-reset'
                        required
                        {...field}
                      />
                    </FormControl>
                    <FormMessage id='password-error' className='text-xs' />
                    <FormDescription
                      id='password-reset'
                      className='text-xs text-brand-secondary font-medium select-none cursor-pointer'
                    >
                      <button
                        className='hover:underline'
                        type='button'
                        onClick={() => window.open('https://openreply.app/reset-password', '_blank')}
                      >
                        Reset Password
                      </button>
                    </FormDescription>
                  </FormItem>
                )}
              />
              <Button
                size='lg'
                type='submit'
                className='w-full transition-all'
                disabled={!form.formState.isValid || isAuthenticationUnderway || isAuthenticationUnderwayWithGoogle}
                aria-label='Continue with email'
              >
                {
                  isAuthenticationUnderway ? (
                    <LoadingIcon className='mr-2 h-4 w-4 text-white' aria-hidden='true' />
                  ) : (
                    <Mail className='mr-2 h-4 w-4' aria-hidden='true' />
                  )
                }
                Continue With Email
              </Button>
            </form>
          </Form>
          <div className='flex flex-col space-y-5 mt-5'>
            <div className='relative select-none'>
              <div className='absolute inset-0 flex items-center'>
                <span className='w-full border-t border-border-primary' />
              </div>
              <div className='relative flex justify-center text-xs uppercase'>
                <span className='bg-background px-2 text-placeholder'>
                  Or continue with
                </span>
              </div>
            </div>
            <Button
              size='lg'
              className='w-full'
              variant='outline'
              aria-label='Continue with Google'
              disabled={isAuthenticationUnderway || isAuthenticationUnderwayWithGoogle}
              onClick={()=>{console.log("Placeholder")}}
            >
              {
                isAuthenticationUnderwayWithGoogle ? (
                  <LoadingIcon className='mr-2 h-4 w-4 text-white' aria-hidden='true' />
                ) : (
                  <GoogleIcon className='mr-2' />
                )
              }
              Continue With Google
            </Button>
            <div className='w-full'>
              <p className='text-center text-placeholder text-[10px] font-medium'>
                By clicking continue, you agree to our {' '}
                <a target='_blank' href='https://openreply.app/terms-of-service' className='font-bold hover:underline'>Terms of Service</a>, {' '}
                <a target='_blank' href='https://openreply.app/community-guidelines' className='font-bold hover:underline'>Community Guidelines</a>, and {' '}
                <a target='_blank' href='https://openreply.app/privacy-policy' className='font-bold hover:underline'>Privacy Policy</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Authentication