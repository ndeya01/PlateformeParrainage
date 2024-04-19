import React from 'react'
import { Link } from 'react-router-dom'

export default function Candidats() {
  return (
    <div>
      <p>la liste des Candidats</p>
      <Link to="/" className="underline">go to dashboard</Link>
    </div>
  )
}
