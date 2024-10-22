import { Button } from "../ui/button"

interface ThemeControllerType {
    value: boolean, 
    setValue: (newVal: boolean) => void
  }
  
export default function ThemeController({value, setValue}:ThemeControllerType) {    
return (
    <Button 
    className={'text-muted-foreground no-underline absolute bottom-1 left-1/2 -translate-x-1/2'} 
    variant={'link'} 
    onClick={() => setValue(!value)}>
    {value?"Dark Mode" : "Light Mode"}
    </Button>
)
}