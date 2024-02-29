import { Button } from "@/components/ui/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { CreateAccountForm } from "../Auth/create-account-form"
import { LoginAccountForm } from "../Auth/login-account-form"
 
export function TabsDemo() {
  return (
    <Tabs defaultValue="create-account" className="w-[400px] border rounded-md pb-4 shadow-2xl">
      <TabsList className="flex justify-around items-center rounded-b-none h-14">
        <TabsTrigger value="create-account" className="transition-all delay-100">Criar Conta</TabsTrigger>
        <TabsTrigger value="login" className="transition-all delay-100">Login</TabsTrigger>
      </TabsList>
      <TabsContent value="create-account">
        <CreateAccountForm />
      </TabsContent>
      <TabsContent value="login">
      <LoginAccountForm />
      </TabsContent>
    </Tabs>
  )
}