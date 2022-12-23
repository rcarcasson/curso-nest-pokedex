import { IsInt, IsPositive, Min, IsString, MinLength } from "class-validator";

// El DTO define los tipos y características de las distintas propiedades de nuestro objeto. La librería class-validator entrega
// diferentes decoradores para otorgar reglas para ellos

export class CreatePokemonDto {

    @IsInt()
    @IsPositive()
    @Min(1)
    no: number;

    @IsString()
    @MinLength(1)
    name: string;
}
