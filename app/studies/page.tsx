import Link from "next/link"
import { Button } from "@/_components/ui/button"
import { Input } from "@/_components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/_components/ui/select"
import { Badge } from "@/_components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/_components/ui/tabs"
import { Search, Users, Calendar, MapPin, Filter } from "lucide-react"

// Mock data for study groups
const studyGroups = [
  {
    id: 1,
    title: "프론트엔드 개발자 기술 면접 스터디",
    category: "개발/IT",
    description: "React, TypeScript 등 프론트엔드 기술 면접 준비를 위한 스터디입니다. 주 2회 온라인으로 진행됩니다.",
    members: { current: 4, max: 6 },
    startDate: "2025.04.15",
    location: "온라인",
    status: "모집중",
  },
  {
    id: 2,
    title: "백엔드 개발자 면접 준비 모임",
    category: "개발/IT",
    description:
      "Java, Spring, 데이터베이스 등 백엔드 개발자 면접 준비를 위한 스터디입니다. 주 1회 오프라인으로 만나 모의면접을 진행합니다.",
    members: { current: 3, max: 5 },
    startDate: "2025.04.20",
    location: "서울 강남",
    status: "모집중",
  },
  {
    id: 3,
    title: "금융권 취업 면접 스터디",
    category: "금융",
    description:
      "은행, 증권사 등 금융권 취업을 위한 면접 스터디입니다. 직무적성검사와 실전 면접 대비를 함께 준비합니다.",
    members: { current: 5, max: 5 },
    startDate: "2025.04.10",
    location: "서울 여의도",
    status: "모집완료",
  },
  {
    id: 4,
    title: "마케팅 직무 면접 준비 모임",
    category: "마케팅",
    description:
      "브랜드 마케팅, 디지털 마케팅 등 마케팅 직무 면접을 준비하는 스터디입니다. 케이스 스터디와 포트폴리오 리뷰를 진행합니다.",
    members: { current: 2, max: 6 },
    startDate: "2025.04.25",
    location: "온라인",
    status: "모집중",
  },
  {
    id: 5,
    title: "대기업 공채 면접 대비 스터디",
    category: "취업일반",
    description: "대기업 공채 면접을 준비하는 스터디입니다. 자기소개, 직무적합성, 상황면접 등을 준비합니다.",
    members: { current: 6, max: 8 },
    startDate: "2025.05.01",
    location: "서울 종로",
    status: "모집중",
  },
  {
    id: 6,
    title: "UX/UI 디자이너 포트폴리오 및 면접 스터디",
    category: "디자인",
    description:
      "UX/UI 디자이너 취업을 위한 포트폴리오 리뷰 및 면접 준비 스터디입니다. 실무자의 피드백을 받을 수 있습니다.",
    members: { current: 3, max: 4 },
    startDate: "2025.04.18",
    location: "온라인/오프라인 병행",
    status: "모집중",
  },
]

export default function StudiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="text-xl font-bold">
            InterviewBuddy
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/studies" className="text-sm font-medium text-primary">
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
            <Link href="#" className="text-sm font-medium hover:text-primary">
              로그인
            </Link>
            <Button size="sm">회원가입</Button>
          </div>
        </div>
      </header>

      <main className="flex-1 py-10">
        <div className="container">
          <h1 className="text-3xl font-bold mb-8">면접 스터디 찾기</h1>

          {/* Search and Filter */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="스터디 검색" className="pl-9" />
              </div>
              <Button>검색</Button>
            </div>

            <div className="flex flex-wrap gap-3">
              <Select defaultValue="all">
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="카테고리" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">전체</SelectItem>
                  <SelectItem value="dev">개발/IT</SelectItem>
                  <SelectItem value="finance">금융</SelectItem>
                  <SelectItem value="marketing">마케팅</SelectItem>
                  <SelectItem value="design">디자인</SelectItem>
                  <SelectItem value="general">취업일반</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="all">
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="지역" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">전체</SelectItem>
                  <SelectItem value="online">온라인</SelectItem>
                  <SelectItem value="seoul">서울</SelectItem>
                  <SelectItem value="gyeonggi">경기</SelectItem>
                  <SelectItem value="busan">부산</SelectItem>
                  <SelectItem value="other">기타 지역</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="all">
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="모집상태" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">전체</SelectItem>
                  <SelectItem value="recruiting">모집중</SelectItem>
                  <SelectItem value="completed">모집완료</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" size="icon" className="h-10 w-10">
                <Filter className="h-4 w-4" />
                <span className="sr-only">필터</span>
              </Button>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="all" className="mb-8">
            <TabsList>
              <TabsTrigger value="all">전체</TabsTrigger>
              <TabsTrigger value="online">온라인</TabsTrigger>
              <TabsTrigger value="offline">오프라인</TabsTrigger>
              <TabsTrigger value="popular">인기 스터디</TabsTrigger>
              <TabsTrigger value="new">신규 등록</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {studyGroups.map((study) => (
                  <Link key={study.id} href={`/studies/${study.id}`} className="block group">
                    <div className="rounded-lg border bg-card overflow-hidden transition-all hover:shadow-md h-full">
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <Badge variant={study.category === "개발/IT" ? "default" : "secondary"}>
                            {study.category}
                          </Badge>
                          <span
                            className={`text-sm ${study.status === "모집중" ? "text-green-600" : "text-muted-foreground"}`}
                          >
                            {study.status}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary">{study.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{study.description}</p>
                        <div className="flex flex-col gap-2 text-sm">
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1 text-muted-foreground" />
                            <span>
                              {study.members.current}/{study.members.max}명
                            </span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                            <span>시작일: {study.startDate}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                            <span>{study.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="online">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {studyGroups
                  .filter((study) => study.location.includes("온라인"))
                  .map((study) => (
                    <Link key={study.id} href={`/studies/${study.id}`} className="block group">
                      <div className="rounded-lg border bg-card overflow-hidden transition-all hover:shadow-md h-full">
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <Badge variant={study.category === "개발/IT" ? "default" : "secondary"}>
                              {study.category}
                            </Badge>
                            <span
                              className={`text-sm ${study.status === "모집중" ? "text-green-600" : "text-muted-foreground"}`}
                            >
                              {study.status}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold mb-2 group-hover:text-primary">{study.title}</h3>
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{study.description}</p>
                          <div className="flex flex-col gap-2 text-sm">
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-1 text-muted-foreground" />
                              <span>
                                {study.members.current}/{study.members.max}명
                              </span>
                            </div>
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                              <span>시작일: {study.startDate}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                              <span>{study.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </TabsContent>
            {/* Other tab contents would be similar */}
          </Tabs>

          {/* Pagination */}
          <div className="flex justify-center mt-10">
            <nav className="flex items-center gap-1">
              <Button variant="outline" size="icon" disabled>
                <span className="sr-only">이전 페이지</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-9 w-9 font-medium bg-primary text-primary-foreground hover:bg-primary/90"
              >
                1
              </Button>
              <Button variant="outline" size="sm" className="h-9 w-9 font-medium">
                2
              </Button>
              <Button variant="outline" size="sm" className="h-9 w-9 font-medium">
                3
              </Button>
              <Button variant="outline" size="icon">
                <span className="sr-only">다음 페이지</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Button>
            </nav>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-8">
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
