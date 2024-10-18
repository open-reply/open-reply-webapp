// Components:
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"


// Functions:
const website = () => {

  // Return:
  return (
    <main className="pt-[68px] h-screen">
      <ResizablePanelGroup direction="horizontal" className="w-full h-full">
        <ResizablePanel className="h-full">One</ResizablePanel>
        <ResizableHandle disabled/>
        <ResizablePanel className="h-full">Two</ResizablePanel>
      </ResizablePanelGroup>
    </main>
  )
}


// Exports:
export default website