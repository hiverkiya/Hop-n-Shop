import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Progress} from "@/components/ui/progress";
import {Textarea} from "@/components/ui/textarea";

export default function Home() {
  return (
      <div>
        <p className="text-rose-500" >
          Hello world
        </p>
          <Input placeholder={"Hi"}/>
          <Button variant={"elevated"} >hello</Button>
          <Progress value={25}/>
          <Textarea/>
      </div>
  )
}
