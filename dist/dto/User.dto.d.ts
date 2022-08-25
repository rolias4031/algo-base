export declare class CreateUserDto {
    email: string;
    password: string;
    confirm_password: string;
    api_key: string;
}
declare const DeleteUserDto_base: import("@nestjs/mapped-types").MappedType<Omit<CreateUserDto, "api_key" | "confirm_password">>;
export declare class DeleteUserDto extends DeleteUserDto_base {
    confirmationPhrase: string;
}
export {};
