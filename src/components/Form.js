import React from 'react'
import CustomBtn from './CustomBtn'
import Typography from "@mui/material/Typography"

function Form() {
    return (
        <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <p>
                <label><Typography variant="h6">Имя, Фамилия</Typography><input type="text" name="name" /></label>
            </p>
            <p>
                <label><Typography variant="h6">Email</Typography><input type="email" name="email" /></label>
            </p>
            <p>
                <label>
                    <Typography variant="h6">Your Role</Typography>
                    <select name="role[]" multiple>
                        <option value="leader">Leader</option>
                        <option value="follower">Follower</option>
                    </select>
                </label>
            </p>
            <p>
                <label><Typography variant="h6">Message</Typography>
                <textarea name="message"></textarea></label>
            </p>
            <p>
                <CustomBtn type="submit" txt="Send"/>
            </p>
        </form>
    )
}

export default Form
