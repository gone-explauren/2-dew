import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button, Input, Select, Box } from '@mantine/core';
import {
  IconLogin,
} from '@tabler/icons-react';

function SignupModal({ handleChange, handleSubmit, signup, classes, setRole }) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>

      <Modal opened={opened} onClose={close} title="Authentication" centered>
        <Box maw={300} mx="auto">

          <form onSubmit={(e)=>handleSubmit(e, signup)}>

            <Input
              placeholder="UserName"
              name="username"
              onChange={handleChange}
            />
            <Input
              placeholder="PassWord"
              name="password"
              onChange={handleChange}
            />
            <Select
              label="role"
              placeholder="role"
              name="role"
              onChange={(role)=>{setRole(role)}}
              data={[
                { value: 'user', label: 'user'},
                { value: 'editor', label: 'editor' },
                { value: 'writer', label: 'writer' },
                { value: 'admin', label: 'admin' },
              ]}
            />
              <Input.Wrapper name='role'></Input.Wrapper>
            <Group position="right" mt="md">
              <Button type="submit">
                <IconLogin className={classes.linkIcon} stroke={1.5} />
                <span>Sign Up</span>
              </Button>
            </Group>
          </form>
        </Box>

      </Modal>
      <Group position="center">
        <Button onClick={open}>Sign Up</Button>
      </Group>
    </>
  );
}

export default SignupModal;