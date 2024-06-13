export const Album =({name,year,children})=>{
    return <div>
        <h3>{name}</h3>
        <p>Realised in {year}</p>
        {children}
    </div>
}