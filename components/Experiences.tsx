import { H2 } from "./Typography";
import experiences from '../data/experiences';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'

function getStartEnd({ start, end }: { start: string, end: string | null }) {
  const endDate = end ?? 'today';
  return `${start} - ${endDate}`;
}

export default function Experiences() {
  return (
    <>
      <H2> Experience </H2>
      {experiences.map((e, i) => (
        <Card key={i}>
          <CardHeader>
            <CardTitle>{e.title}</CardTitle>
            <CardDescription>
              <Image
                src={e.image}
                alt={e.company}
              />
              {e.company}
            </CardDescription>
            <CardDescription>{getStartEnd(e.duration)}</CardDescription>
          </CardHeader>
          <CardContent>
            {e.body()}
          </CardContent>
          <CardFooter>
            <p>{e.place}</p>
          </CardFooter>
        </Card>
      ))}
    </>
  )
}