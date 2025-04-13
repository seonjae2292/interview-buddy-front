import Link from "next/link"
import { Button } from "@/_components/ui/button"
import { Badge } from "@/_components/ui/badge"
import { Card, CardContent } from "@/_components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/_components/ui/tabs"
import { Users, Calendar, MapPin, MessageCircle, Share2 } from "lucide-react"
import { Separator } from "@/_components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/_components/ui/avatar"

// Mock data for study details
const studyGroups = {
  1: {
    id: 1,
    title: "프론트엔드 개발자 기술 면접 스터디",
    category: "개발/IT",
    description: "React, TypeScript 등 프론트엔드 기술 면접 준비를 위한 스터디입니다. 주 2회 온라인으로 진행됩니다.",
    detailedDescription: `
      안녕하세요! 프론트엔드 개발자 취업을 준비하시는 분들을 위한 기술 면접 스터디를 모집합니다.

      ## 스터디 목표
      - 프론트엔드 개발 기술 면접 질문에 대한 답변 준비
      - 코딩 테스트 문제 풀이 및 리뷰
      - 모의 면접을 통한 실전 감각 익히기

      ## 스터디 내용
      - React, TypeScript, JavaScript 등 프론트엔드 기술 관련 면접 질문 준비
      - CS 기초 지식 (자료구조, 알고리즘, 네트워크 등) 학습
      - 주 1회 모의 면접 진행
      - 주 1회 코딩 테스트 문제 풀이 및 리뷰

      ## 진행 방식
      - 주 2회 온라인 미팅 (화요일, 금요일 저녁 8시)
      - 매주 학습할 주제 선정 및 질문 리스트 준비
      - 각자 답변 준비 후 스터디 시간에 공유 및 피드백
    `,
    members: { current: 4, max: 6 },
    startDate: "2025.04.15",
    location: "온라인",
    status: "모집중",
    leader: {
      name: "김개발",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "프론트엔드 개발자",
    },
    contact: "카카오톡 오픈채팅: https://open.kakao.com/o/abcdefg",
    requirements: "HTML, CSS, JavaScript 기본 지식이 있으신 분",
    schedule: "매주 화요일, 금요일 저녁 8시 ~ 10시",
    comments: [
      {
        id: 1,
        user: {
          name: "이프론트",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        content: "스터디 참여 희망합니다! 현재 React 공부 중인데 면접 준비도 같이 하고 싶어요.",
        date: "2025.04.01",
      },
      {
        id: 2,
        user: {
          name: "박코딩",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        content: "혹시 스터디 참여 경험이 없어도 괜찮을까요?",
        date: "2025.04.02",
      },
    ],
  },
  2: {
    id: 2,
    title: "백엔드 개발자 면접 준비 모임",
    category: "개발/IT",
    description:
      "Java, Spring, 데이터베이스 등 백엔드 개발자 면접 준비를 위한 스터디입니다. 주 1회 오프라인으로 만나 모의면접을 진행합니다.",
    detailedDescription: `
      백엔드 개발자 취업을 준비하는 분들을 위한 면접 스터디입니다.

      ## 스터디 목표
      - 백엔드 개발 기술 면접 질문에 대한 답변 준비
      - 실제 면접 상황을 가정한 모의 면접 진행
      - 포트폴리오 리뷰 및 피드백

      ## 스터디 내용
      - Java, Spring, JPA, 데이터베이스 등 백엔드 기술 관련 면접 질문 준비
      - 시스템 설계 및 아키텍처 관련 질문 대비
      - CS 기초 지식 학습

      ## 진행 방식
      - 주 1회 오프라인 미팅 (토요일 오후 2시)
      - 매주 학습할 주제 선정 및 질문 리스트 준비
      - 모의 면접 진행 및 피드백
    `,
    members: { current: 3, max: 5 },
    startDate: "2025.04.20",
    location: "서울 강남",
    status: "모집중",
    leader: {
      name: "최백엔드",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "백엔드 개발자",
    },
    contact: "이메일: backend@example.com",
    requirements: "Java 기본 지식이 있으신 분, Spring 프레임워크 사용 경험이 있으면 좋습니다.",
    schedule: "매주 토요일 오후 2시 ~ 5시",
    comments: [],
  },
}

export default function StudyDetailPage({ params }: { params: { id: string } }) {
  const studyId = Number.parseInt(params.id)
  const study = studyGroups[studyId as keyof typeof studyGroups]

  if (!study) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">스터디를 찾을 수 없습니다</h1>
        <p className="mb-8">요청하신 스터디 정보가 존재하지 않습니다.</p>
        <Button asChild>
          <Link href="/studies">스터디 목록으로 돌아가기</Link>
        </Button>
      </div>
    )
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
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1">
              <div className="mb-6">
                <Link href="/studies" className="text-sm text-muted-foreground hover:text-primary">
                  ← 스터디 목록으로 돌아가기
                </Link>
              </div>

              <div className="mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="default">{study.category}</Badge>
                  <span className={`text-sm ${study.status === "모집중" ? "text-green-600" : "text-muted-foreground"}`}>
                    {study.status}
                  </span>
                </div>
                <h1 className="text-3xl font-bold mb-4">{study.title}</h1>
                <p className="text-muted-foreground mb-6">{study.description}</p>

                <div className="flex flex-wrap gap-6 text-sm mb-6">
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

                <div className="flex gap-3">
                  <Button>참여 신청하기</Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <Tabs defaultValue="details">
                <TabsList className="mb-4">
                  <TabsTrigger value="details">상세 정보</TabsTrigger>
                  <TabsTrigger value="comments">댓글 ({study.comments?.length || 0})</TabsTrigger>
                </TabsList>
                <TabsContent value="details" className="space-y-6">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="prose max-w-none">
                        <div className="whitespace-pre-line">{study.detailedDescription}</div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="comments" className="space-y-6">
                  <Card>
                    <CardContent className="pt-6">
                      {study.comments && study.comments.length > 0 ? (
                        <div className="space-y-6">
                          {study.comments.map((comment) => (
                            <div key={comment.id} className="flex gap-4">
                              <Avatar>
                                <AvatarImage src={comment.user.avatar} alt={comment.user.name} />
                                <AvatarFallback>{comment.user.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                  <div className="font-medium">{comment.user.name}</div>
                                  <div className="text-sm text-muted-foreground">{comment.date}</div>
                                </div>
                                <p className="text-sm">{comment.content}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8 text-muted-foreground">
                          <MessageCircle className="mx-auto h-8 w-8 mb-2 opacity-50" />
                          <p>아직 댓글이 없습니다. 첫 댓글을 남겨보세요!</p>
                        </div>
                      )}

                      <Separator className="my-6" />

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">댓글 작성</h3>
                        <textarea
                          className="w-full min-h-[100px] p-3 border rounded-md"
                          placeholder="스터디에 대한 질문이나 의견을 남겨주세요"
                        ></textarea>
                        <div className="flex justify-end">
                          <Button>댓글 등록</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-80 space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-medium mb-4">스터디장 정보</h3>
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar>
                      <AvatarImage src={study.leader.avatar} alt={study.leader.name} />
                      <AvatarFallback>{study.leader.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{study.leader.name}</div>
                      <div className="text-sm text-muted-foreground">{study.leader.role}</div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    메시지 보내기
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 space-y-4">
                  <h3 className="text-lg font-medium">스터디 정보</h3>

                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">일정</h4>
                    <p className="text-sm">{study.schedule}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">참여 요건</h4>
                    <p className="text-sm">{study.requirements}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">연락 방법</h4>
                    <p className="text-sm">{study.contact}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-medium mb-4">참여 신청하기</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    현재 {study.members.current}명이 참여 중이며, {study.members.max - study.members.current}자리가
                    남아있습니다.
                  </p>
                  <Button className="w-full">참여 신청하기</Button>
                </CardContent>
              </Card>
            </div>
          </div>
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
