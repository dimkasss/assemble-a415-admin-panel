"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Marmelad } from "next/font/google";

const marmelad = Marmelad({ weight: "400", subsets: ["latin", "cyrillic"] });

export function LoginForm() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card
        className="w-full max-w-md border-0 rounded-3xl"
        style={{ backgroundColor: "#E9E7EF" }}
      >
        <CardHeader>
          <CardTitle
            className={`text-2xl font-normal text-center text-gray-700 ${marmelad.className}`}
          >
            Assemble
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="login"
                  className="text-sm font-medium text-gray-700 block"
                >
                  Введите логин
                </label>
                <Input id="login" placeholder="Логин" className="rounded-xl" />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700 block"
                >
                  Введите пароль
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Пароль"
                  className="rounded-xl"
                />
              </div>
              <Button className="w-full bg-gray-600 hover:bg-gray-700 rounded-xl">
                Войти
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
