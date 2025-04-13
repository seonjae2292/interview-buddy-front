"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/_components/ui/button"
import { Input } from "@/_components/ui/input"
import { Textarea } from "@/_components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/_components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/_components/ui/radio-group"
import { Label } from "@/_components/ui/label"
import { CalendarIcon, Info, Users } from "lucide-react"
import { Calendar } from "@/_components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/_components/ui/popover"
import { format } from "date-fns"
import { cn } from "../lib/utils"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/_components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/_components/ui/alert"

export default function CreateStudyPage() {
  const router = useRouter()
  const [date, setDate] = useState<Date>()
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send the form data to your backend
    setFormSubmitted(true)

    // Simulate a delay before redirecting
    setTimeout(() => {
      router.push("/studies")
    }, 2000)
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
            <Link href="/create" className="text-sm font-medium text-primary">
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
            <Link href="#" className="text-sm font-medium hover:text-primary">
              로그인
            </Link>
            <Button size="sm">회원가입</Button>
          </div>
        </div>
      </header>

      <main className="flex-1 py-10">
        <div className="container max-w-3xl">
          <h1 className="text-3xl font-bold mb-8">면접 스터디 만들기</h1>

          {formSubmitted ? (
            <Alert className="mb-8 bg-green-50 border-green-200">
              <Info className="h-4 w-4 text-green-600" />
              <AlertTitle className="text-green-800">스터디가 성공적으로 등록되었습니다!</AlertTitle>
              <AlertDescription className="text-green-700">스터디 목록 페이지로 이동합니다...</AlertDescription>
            </Alert>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>스터디 정보 입력</CardTitle>
                <CardDescription>
                  면접 스터디에 대한 정보를 입력해주세요. 정확한 정보를 입력할수록 적합한 스터디원을 모집할 수 있습니다.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="title">스터디 제목</Label>
                    <Input id="title" placeholder="스터디 제목을 입력하세요" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">카테고리</Label>
                    <Select required>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="카테고리 선택" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dev">개발/IT</SelectItem>
                        <SelectItem value="finance">금융</SelectItem>
                        <SelectItem value="marketing">마케팅</SelectItem>
                        <SelectItem value="design">디자인</SelectItem>
                        <SelectItem value="general">취업일반</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">스터디 소개</Label>
                    <Textarea
                      id="description"
                      placeholder="스터디에 대한 간략한 소개를 입력하세요"
                      className="min-h-[100px]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="detailed-description">상세 설명</Label>
                    <Textarea
                      id="detailed-description"
                      placeholder="스터디 목표, 진행 방식, 일정 등 상세한 내용을 입력하세요"
                      className="min-h-[200px]"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="location-type">진행 방식</Label>
                      <RadioGroup defaultValue="online" className="flex flex-col space-y-1">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="online" id="online" />
                          <Label htmlFor="online" className="font-normal">
                            온라인
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="offline" id="offline" />
                          <Label htmlFor="offline" className="font-normal">
                            오프라인
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="hybrid" id="hybrid" />
                          <Label htmlFor="hybrid" className="font-normal">
                            온/오프라인 병행
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">지역</Label>
                      <Select>
                        <SelectTrigger id="location">
                          <SelectValue placeholder="지역 선택" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="online">온라인</SelectItem>
                          <SelectItem value="seoul-gangnam">서울 강남</SelectItem>
                          <SelectItem value="seoul-jongno">서울 종로</SelectItem>
                          <SelectItem value="seoul-yeouido">서울 여의도</SelectItem>
                          <SelectItem value="gyeonggi">경기</SelectItem>
                          <SelectItem value="busan">부산</SelectItem>
                          <SelectItem value="other">기타 지역</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>시작 예정일</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !date && "text-muted-foreground",
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : "날짜 선택"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="max-members">최대 인원</Label>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <Select defaultValue="6">
                          <SelectTrigger id="max-members">
                            <SelectValue placeholder="인원 선택" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="2">2명</SelectItem>
                            <SelectItem value="3">3명</SelectItem>
                            <SelectItem value="4">4명</SelectItem>
                            <SelectItem value="5">5명</SelectItem>
                            <SelectItem value="6">6명</SelectItem>
                            <SelectItem value="8">8명</SelectItem>
                            <SelectItem value="10">10명</SelectItem>
                            <SelectItem value="12">12명</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="requirements">참여 요건 (선택사항)</Label>
                    <Textarea
                      id="requirements"
                      placeholder="스터디 참여에 필요한 요건이 있다면 입력하세요 (경력, 지식 수준 등)"
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact">연락 방법</Label>
                    <Input id="contact" placeholder="카카오톡 오픈채팅, 이메일 등 연락 방법을 입력하세요" required />
                  </div>

                  <CardFooter className="flex justify-end gap-4 px-0">
                    <Button type="button" variant="outline" onClick={() => router.push("/studies")}>
                      취소
                    </Button>
                    <Button type="submit">스터디 등록하기</Button>
                  </CardFooter>
                </form>
              </CardContent>
            </Card>
          )}
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
