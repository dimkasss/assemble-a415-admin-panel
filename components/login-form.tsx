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
        className="w-full max-w-2xl md:px-32 md:py-12 border-0 rounded-3xl"
        style={{ backgroundColor: "#E9E7EF" }}
      >
        <CardHeader>
          <CardTitle
            className={`text-3xl md:text-5xl font-normal text-center text-gray-700 ${marmelad.className}`}
          >
            Assemble
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="login"
                  className="text-md md:text-xl font-medium text-gray-700 block"
                >
                  Введите логин
                </label>
                <Input
                  id="login"
                  placeholder="Логин"
                  className="rounded-xl md:p-5 md:text-lg"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="text-md md:text-xl font-medium text-gray-700 block"
                >
                  Введите пароль
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Пароль"
                  className="rounded-xl md:p-5 md:text-lg"
                />
              </div>
              <Button className="w-full bg-gray-600 hover:bg-gray-700 rounded-xl md:text-xl md:py-6">
                Войти
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
