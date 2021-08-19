import React from 'react'
import "./card.css"
const Card = ({ text }) => {
    return (
        <div>
            <main className="content">
                <section className="about">
                    <h2 className="about-title">About</h2>
                    <p className="about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptas maiores quibusdam earum quis modi porro fugit! Pariatur minus corporis et, quis officia, eius vero distinctio nisi veritatis dignissimos laboriosam!
                    Ad, alias placeat ut, sequi perferendis vel quisquam aspernatur pariatur enim praesentium quae fugiat quis obcaecati temporibus! Totam quisquam, obcaecati necessitatibus numquam tempora, eaque quis dignissimos fugiat, odit provident in.
                    Dolores iure modi libero corrupti tenetur accusantium quaerat. Quo commodi, iure quod recusandae accusamus omnis repellat ut maiores, facere ullam voluptatum? Eligendi beatae neque sequi perferendis vero rerum ipsa impedit.</p>
                </section>
            </main>
        </div>
    )
}

export default Card
