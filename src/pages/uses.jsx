import { NextSeo } from 'next-seo'
import siteMeta from '@/data/siteMeta'
import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-5">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <NextSeo
        title="Uses - Tayyab Anwar"
        description={siteMeta.description}
        canonical="https://taby.dev/uses"
        openGraph={{
          url: 'https://taby.dev/uses',
          images: [
            {
              url: `https://og.taby.dev/api/og?title=Uses&desc=Things I use every day to get my work done.`,
              width: 1200,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
          ],
          siteName: 'taby.dev',
        }}
      />
      <SimpleLayout
        title="Software I use, gadgets I love."
        intro="Here's what I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. "
      >
        <div className="space-y-2">
          <ToolsSection title="Workstation">
            <Tool title="16” MacBook Pro, M1 Pro, 16GB RAM (2021)">
              M1 is the best thing Apple did. I haven’t heard the fans blow in
              2+ years.
            </Tool>
            <Tool title="Dell U3417W QHD Ultra-Wide Monitor">
              Is your workstation even serious if your not getting a neck
              workout?
            </Tool>
            <Tool title="Apple Magic Trackpad">My wrist always rests.</Tool>
            <Tool title="Apple Magic Keyboard">
              I don’t buy into the mechanical hype.
            </Tool>
            <Tool title="Aukey HD Webcam">
              Have to show-off my skincare routine.
            </Tool>
          </ToolsSection>
        </div>

        <div className="mt-8 space-y-20">
          <ToolsSection title="Gadgets">
            <Tool title="PlayStation 5">
              I’m a sucker for story-driven games.
            </Tool>
            <Tool title="Apple Watch SE">
              I will definitely forget to stand up if I take this off.
            </Tool>
            <Tool title="Apple AirPods Pro">Barely Noise Canceling</Tool>
            <Tool title="Contigo Water Bottle">Stay hyderated, kids.</Tool>
            <Tool title="Apple iPad">Strictly for Cocomelon</Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
