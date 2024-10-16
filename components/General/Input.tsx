type Props = {
    name: string 
    error: string 
    value?: string 
    label?: string 
    placeholder?: string
    icon?: any
    onChange?: () => void
}

export default function Input({error,label, icon, name,onChange, value,placeholder}: Props) {
  return (
    <div>
        <p>{label}</p>
        <div className="h-12 overflow-hidden rounded-md border-2 shadow-md">
            <input type="text" name={name}value={value} onChange={onChange} placeholder={placeholder} className="h-full w-full pl-3 relative bg-transparent"/>
            <span className="absolute top-1/2 -translate-y-1/2 right-3">{icon}</span>
        </div>
        <p className={` ${error? "h-5":"h-0"} duration-300 text-red-500`}>{error}</p>
    </div>
  )
}
