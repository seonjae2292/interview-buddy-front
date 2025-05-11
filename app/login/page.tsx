"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/_components/ui/button"
import { Input } from "@/_components/ui/input"
import { Label } from "@/_components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/_components/ui/card"
import { Checkbox } from "@/_components/ui/checkbox"
import { Alert, AlertDescription } from "@/_components/ui/alert"
import { Eye, EyeOff, AlertCircle } from "lucide-react"
import Image from "next/image"

const KAKAO_LOGIN_URL = process.env.NEXT_PUBLIC_KAKAO_LOGIN_URL || ""

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email || !password) {
      setError("이메일과 비밀번호를 모두 입력해주세요.")
      return
    }

    setIsLoading(true)

    // 실제 구현에서는 여기서 API 호출을 통해 로그인 처리를 합니다.
    try {
      // 로그인 시뮬레이션 (실제 구현에서는 API 호출로 대체)
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // 로그인 성공 시 홈페이지로 리다이렉트
      router.push("/")
    } catch (err) {
      setError("로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="text-xl font-bold">
            InterviewBuddy
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/studies" className="text-sm font-medium hover:text-primary">
              스터디 찾기
            </Link>
            <Link href="/create" className="text-sm font-medium hover:text-primary">
              스터디 만들기
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              커뮤니티
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              자료실
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-primary">
              로그인
            </Link>
            <Button size="sm" asChild>
              <Link href="/signup">회원가입</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 py-10">
        <div className="container max-w-md">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">로그인</CardTitle>
              <CardDescription className="text-center">계정에 로그인하여 면접 스터디를 시작하세요</CardDescription>
            </CardHeader>
            <CardContent>
              {error && (
                <Alert variant="destructive" className="mb-4">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">이메일</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">비밀번호</Label>
                    <Link href="/forgot-password" className="text-xs text-primary hover:underline">
                      비밀번호 찾기
                    </Link>
                  </div>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                  />
                  <Label htmlFor="remember" className="text-sm font-normal">
                    로그인 상태 유지
                  </Label>
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "로그인 중..." : "로그인"}
                </Button>
              </form>
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-muted"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">또는</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Button onClick={() => router.push(KAKAO_LOGIN_URL)} variant="outline" className="relative">
                  <Image fill className="absolute" src="/login/kakao_login_btn.png" alt="카카오 로그인 버튼 이미지" />
                </Button>
                <Button variant="outline" className="relative">
                  <Image fill className="absolute" src="/login/naver_login_btn.png" alt="네이버 로그인 버튼 이미지" />
                </Button>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-center">
              <p className="text-sm text-muted-foreground mt-2">
                아직 계정이 없으신가요?{" "}
                <Link href="/signup" className="text-primary hover:underline">
                  회원가입
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 mt-auto">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-xl font-bold mb-2">InterviewBuddy</div>
              <p className="text-sm text-muted-foreground">면접 스터디를 찾고 함께 성장하는 플랫폼</p>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <div>
                <h4 className="font-medium mb-2">서비스</h4>
                <ul className="space-y-1">
                  <li>
                    <Link href="/studies" className="text-sm text-muted-foreground hover:text-foreground">
                      스터디 찾기
                    </Link>
                  </li>
                  <li>
                    <Link href="/create" className="text-sm text-muted-foreground hover:text-foreground">
                      스터디 만들기
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                      자료실
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">회사</h4>
                <ul className="space-y-1">
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                      소개
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                      이용약관
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                      개인정보처리방침
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t text-center text-sm text-muted-foreground">
            © 2025 InterviewBuddy. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
