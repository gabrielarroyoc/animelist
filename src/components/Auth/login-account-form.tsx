"use client"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "../ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"

const formSchema = z.object({
    email: z.string({
        required_error: "email is required."
    }).email({
        message: "insira um email válido"
    }),
    password: z.string({
        required_error: "password is required."
    }).min(7, {
        "message": "A senha precisa ter mais de 7 caracteres"
    }).max(12)
})

export function LoginAccountForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })

    const onSubmit = async(values:z.infer<typeof formSchema>) => {
        console.log(values)
    }


    return <div className="flex flex-col justify-center items-center space-y-2">
        <span className="text-lg">Crie sua conta</span>
        <Form {...form}>
            <form
            onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-2">
                <FormField
                control={form.control}
                name="email"
                render={({field}) => (
                    <FormItem>
                        <FormLabel>E-mail</FormLabel>
                            <FormControl>
                            <Input placeholder="E-mail" {...field}>
                            </Input>
                            </FormControl>
                            <FormDescription>Esse é o seu e-mail</FormDescription>
                            <FormMessage/>
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="email"
                render={({field}) => (
                    <FormItem>
                        <FormLabel>Senha</FormLabel>
                            <FormControl>
                            <Input placeholder="Senha" {...field}>
                            </Input>
                            </FormControl>
                            <FormDescription>Essa é sua senha</FormDescription>
                            <FormMessage/>
                    </FormItem>
                )}
                    />
                     <Button className="w-64 h-12 mt-6 text-lg bg-blue-700">
          Cadastrar
        </Button>
            </form>
        </Form>
   </div>}
