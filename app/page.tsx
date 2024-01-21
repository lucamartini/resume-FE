import Experiences from "@/components/Experiences";
import { H1 } from "@/components/Typography";

export default function Home() {
  return (
    <main 
      className="flex flex-col items-center justify-between p-24"
      >
      <H1> Welcome to my résumé.</H1>
      <p>
        My name is Luca Martini and I am a software developer.
        </p>
        <p>
        I got my Ph.D. as an experimental particle physicist, and then I moved onto my second interest: software developing and coding.
        I prefer languages focusing on high performance, as C++, and on cool stuff, a.k.a. the Internet, as JavaScript.
        Recently, I found a new passion: the cloud, as an AWS solution architect and developer. 
          </p>
      <Experiences

      />

    </main>
  );
}
