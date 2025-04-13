import Link from "next/link"
import { Button } from "./_components/ui/button"
import { ArrowRight, Users, Calendar, Search } from "lucide-react"

export default function Home() {
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
            <Link href="/login" className="text-sm font-medium hover:text-primary">
              로그인
            </Link>
            <Button size="sm" asChild>
              <Link href="/signup">회원가입</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="container flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">면접 스터디를 찾고 함께 성장하세요</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10">
            다양한 분야의 면접 스터디를 찾고, 함께 준비하며 취업 성공률을 높이세요. 전문가와 함께하는 스터디부터
            동료들과의 모의면접까지 다양한 옵션이 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/studies">
                스터디 찾기 <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/create">스터디 만들기</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">왜 InterviewBuddy인가요?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">다양한 스터디 그룹</h3>
              <p className="text-muted-foreground">
                IT, 금융, 마케팅 등 다양한 분야의 면접 스터디 그룹을 찾을 수 있습니다.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">유연한 일정 관리</h3>
              <p className="text-muted-foreground">
                자신의 일정에 맞는 스터디를 찾고, 효율적으로 면접 준비를 할 수 있습니다.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">맞춤형 스터디 추천</h3>
              <p className="text-muted-foreground">관심 분야와 경력에 맞는 최적의 면접 스터디를 추천해 드립니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Studies */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">최근 등록된 스터디</h2>
            <Button variant="ghost" asChild>
              <Link href="/studies">
                더 보기 <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((id) => (
              <Link key={id} href={`/studies/${id}`} className="block group">
                <div className="rounded-lg border bg-card overflow-hidden transition-all hover:shadow-md">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800">
                        개발/IT
                      </span>
                      <span className="text-sm text-muted-foreground">모집중</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary">
                      프론트엔드 개발자 기술 면접 스터디
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      React, TypeScript 등 프론트엔드 기술 면접 준비를 위한 스터디입니다. 주 2회 온라인으로 진행됩니다.
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        <span>4/6명</span>
                      </div>
                      <div>시작일: 2025.04.15</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

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
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
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
