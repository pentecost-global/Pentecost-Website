"use client";

import * as React from "react";
import { BookOpenTextIcon, CaretDownIcon } from "@phosphor-icons/react";

const FAQS = [
  {
    question: "What is Pentecost — is it a church or a denomination?",
    answer:
      "Pentecost is a non-denominational Christian movement gathering young believers, students, and leaders across churches and ministries in worship, prayer, and the ministry of the Word. It is not intended to build a single church or denomination, but to connect people to Christ and to local Christian communities.",
  },
  {
    question: "When and how was the vision birthed?",
    answer:
      "The vision was birthed during midnight prayer on 20 June 2025 by Daniel Friday Olanrewaju. Its aim is spiritual renewal, unity across ministries, and a fresh outpouring of the Holy Spirit on a generation.",
  },
  {
    question: "Who is behind Pentecost and who provides oversight?",
    answer:
      "Pentecost is stewarded by convener Daniel Friday Olanrewaju alongside a leadership team of prayer, creative, and operations stewards. We operate under the pastoral covering, prayer advisory, and counsel of seasoned local church pastors across our host cities.",
  },
  {
    question: "What is the Young Believers Forum?",
    answer:
      "The Young Believers Forum is Pentecost's year-round fellowship and discipleship network. Beyond the citywide gatherings, it provides small-group accountability, biblical study, prayer partners, and mutual encouragement so faith is not walked in isolation.",
  },
  {
    question: "Is there an age restriction to attend gatherings?",
    answer:
      "No. Although the vision speaks particularly to a generation of young people and students, attendance is not age-restricted. Believers of every age and background who share a hunger for God are warmly welcome.",
  },
  {
    question: "How are gathering cities and programmes decided?",
    answer:
      "Pentecost goes where prayer and discernment lead. Each gathering carries a shared heart for renewal — including unhurried worship, the ministry of the Word, corporate prayer, and fellowship — while its location responds to the leading of the Holy Spirit.",
  },
  {
    question: "How can our church, ministry, or student fellowship partner?",
    answer:
      "Churches, campus Christian Unions, and fellowships can partner through our 5 practical pillars: Pray (intercessory shield), Mobilise (rallying student delegations), Serve (volunteer teams), Host (providing venue and facilities), and Follow Up (rooting newly saved into local churches). Visit the Partner With Us page to get started.",
  },
] as const;

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section className="section">
      <div className="site-width">
        <div className="editorial-grid">
          <div>
            <p className="eyebrow section-label">Common questions</p>
            <h2 className="tracking-[-0.04em]">
              Understanding
              <br />
              <em>the movement.</em>
            </h2>
            <p className="body-copy mt-5 max-w-md">
              Everything we do is anchored in Scripture, prayer and a desire to
              see the body of Christ strengthened across cities.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-sm bg-secondary border border-border px-3.5 py-2 text-xs font-semibold text-foreground">
              <BookOpenTextIcon
                size={15}
                weight="duotone"
                className="text-primary"
              />
              <span>Acts 2:1-4 · Judges 15:4</span>
            </div>
          </div>

          <div className="divide-y divide-border border-y border-border">
            {FAQS.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={item.question} className="py-5">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 text-left cursor-pointer group"
                  >
                    <span className="font-display text-lg sm:text-xl font-bold tracking-[-0.02em] text-foreground transition-colors group-hover:text-primary">
                      {item.question}
                    </span>
                    <span
                      className={`inline-flex size-8 shrink-0 items-center justify-center rounded-sm border transition-all duration-300 ${
                        isOpen
                          ? "bg-primary border-primary text-primary-foreground rotate-180"
                          : "bg-secondary border-border text-foreground group-hover:border-primary group-hover:text-primary"
                      }`}
                    >
                      <CaretDownIcon size={15} weight="bold" />
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 mt-3"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="body-copy text-sm leading-relaxed pr-8">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
