"use client"
import { useAuthStore } from '@/utils/store/Auth'
import React from 'react'

const Login = () => {
     const { login } = useAuthStore()
     const [isLoading, setIsLoading] = React.useState<boolean>(false)
     const [error, setError] = React.useState<string | null>(null)

     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault()

          // collect data
          const formData = new FormData(e.currentTarget)
          const email = formData.get("email") as string
          const password = formData.get("password") as string

          // validate data
          if (!email || !password) {
               setError("Please fill out all fields")
               return
          }

          // call the store
          setIsLoading(true)
          setError(null)

          const loginResponse = await login(email, password)
          
          if (loginResponse.error) {
               setError(loginResponse.error.message)
          }

          setIsLoading(false)
     }

  return (
    <div>
      
    </div>
  )
}

export default Login
