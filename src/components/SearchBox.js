import { Wrapper, Input, Icon } from "./Searchbox.styled";

export const Searchbox = ({value, onChange}) => {
    return (
        <Wrapper>
            <Icon />
            <Input
                type ="text"
                value ={value}
                onChange = {(e) => onChange(e.target.value)}
            />
        </Wrapper>
    );
};

