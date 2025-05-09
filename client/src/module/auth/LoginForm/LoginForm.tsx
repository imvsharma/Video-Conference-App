import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { userLogin } from "@/store/actions/auth.action";
import { AppDispatch, RootState } from "@/store/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { z } from "zod";


const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
});

const LoginFormComponent = () => {
  const {success, userInfo, userToken, error} = useSelector((state: RootState) => state.auth)
  const dispatch: AppDispatch = useDispatch()
  const navigate = useNavigate()
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof loginFormSchema>) => {
    console.log(values);
    dispatch(userLogin(values))
  };

  useEffect(() => {
    console.log(userInfo)
    if (userInfo) navigate('/')
  }, [navigate, userInfo])

  return (
    <Card className="w-lg">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardHeader>
            <CardTitle className=" text-3xl">Login</CardTitle>
            <CardDescription>Login into app in one-click</CardDescription>
          </CardHeader>
          <CardContent className="my-10">
            <FormField 
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mt-5">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="mt-5">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Password" {...field} />
                  </FormControl>
                  
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="w-full">
            <Button className="w-42" variant={"outline"}>
              Reset
            </Button>
            <Button className="ml-auto w-42" variant={"default"}>
              Login
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default LoginFormComponent;
