"use client"
import { useAuthStore } from '@/utils/store/Auth'
import React, { useState } from 'react'

const SignUp = () => {
     const { createAccount, login } = useAuthStore()
     const [isLoading, setIsLoading] = useState<boolean>(false)
     const [error, setError] = useState<string | null>(null)

     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault()

          // collect data
          const formData = new FormData(e.currentTarget)
          const firstname = formData.get("firstname") as string
          const lastname = formData.get("lastname") as string
          const email = formData.get("email") as string
          const password = formData.get("password") as string

          // validate data
          if (!firstname || !lastname || !email || !password) {
               setError("Please fill out all fields")
               return
          }

          // call the store
          setIsLoading(true)
          setError(null)

          const response = await createAccount(`${firstname} ${lastname}`, email, password)

          if (response.error) {
               setError(response.error.message)
          } else {
               const loginResponse = await login(email, password)
               if(loginResponse.error) {
                    setError(loginResponse.error.message)
               }
          }
          setIsLoading(false)
     }

     return (
          <div>

          </div>
     )
}

export default SignUp
