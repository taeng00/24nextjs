'use client'
import React, { useState } from 'react'

export default function PingpongPage() {
  const [ls, setLs] = useState(0) // left score
  const [rs, setRs] = useState(0) // right score
  const [lss, setLss] = useState(0) // left set score
  const [rss, setRss] = useState(0) // right set score

  const serveStyle = 'border-y-4 border-white'
  const noServeStyle = ''
  const [lstyle, setLstyle] = useState(serveStyle)
  const [rstyle, setRstyle] = useState(noServeStyle)

  const finalScore = 10 // 21
  const serveChange = 2 // 5

  const leftScore = () => {
    if (ls >= finalScore) {
      setLss(lss + 1)
      setLs(0)
      setRs(0)
    } else {
      setLs(ls + 1)
    }
  }

  const rightScore = () => {
    if (rs >= finalScore) {
      setRss(rss + 1)
      setLs(0)
      setRs(0)
    } else {
      setRs(rs + 1)
    }
  }

  const checkServe = () => {
    let total = ls + rs
    if (total % (serveChange * 2) === 1) {
      setLstyle(serveStyle)
      setRstyle(noServeStyle)
    } else if (total % (serveChange * 2) === serveChange + 1) {
      setLstyle(noServeStyle)
      setRstyle(serveStyle)
    }
  }

  return (
    <div className="flex">
      <div className="w-1/2 bg-blue-700 h-80" onClick={leftScore}>
        <h1 className="text-4xl text-center text-white py-5">청팀 - {lss} </h1>
        <p className="text-9xl text-center text-white mt-10">
          <span className={lstyle}>{ls}</span>
        </p>
      </div>

      <div className="w-1/2 bg-red-700 h-80" onClick={rightScore}>
        <h1 className="text-4xl text-center text-white py-5">홍팀 - {rss} </h1>
        <p className="text-9xl text-center text-white mt-10">
          <span className={rstyle}>{rs}</span>
        </p>
      </div>
    </div>
  )
}