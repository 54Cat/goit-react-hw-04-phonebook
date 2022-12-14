import PropTypes from 'prop-types';
import { Wrapper, Label, Input } from 'components/Filter/FilterStyled';
import { nanoid } from "nanoid";

const filterInputId = nanoid(4);

export default function Filter({value, onChange}) {
    return (
        <Wrapper>
            <Label htmlFor={filterInputId}>Find contact by name
                <Input
                    type="text"
                    name="findByName"
                    id={filterInputId}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    value={value}
                    onChange={onChange}
                />
            </Label>
        </Wrapper>
    );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};