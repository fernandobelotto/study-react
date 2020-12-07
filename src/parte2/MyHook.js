import { Box, Button, Checkbox, Container, FormControl, FormLabel, Heading, HStack, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, PinInput, PinInputField, Radio, RadioGroup, Stack, Switch } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

export default function MyHook() {

    const [counter, setCounter] = useState(0)

    useEffect(
        () => {
            setTimeout(() => {
                console.log('counter é', counter)
            }, 3000)
        },
        [counter]
    )
    const [value, setValue] = React.useState("1")

    return (
        <Box bg="brand.100" w="100%" h="100%" p={4} boxShadow="lg">
            <Container>
                <Heading>{counter}</Heading>
                <Input></Input>
                <Button colorScheme="blue" onClick={() => setCounter(counter + 1)}>Increment</Button>
                <Button colorScheme="blue" onClick={() => setCounter(counter - 1)}>Decrement</Button>
                <Heading>Checkboxes</Heading>
                <Stack spacing={10} direction="row">
                    <Checkbox colorScheme="red" defaultIsChecked>Checkbox</Checkbox>
                    <Checkbox colorScheme="green" defaultIsChecked>Checkbox</Checkbox>
                </Stack>
                <Heading>Number input</Heading>
                <NumberInput>
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
                <Heading>Pin input</Heading>
                <HStack>
                    <PinInput>
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                    </PinInput>
                </HStack>
                <Heading>Radio Group</Heading>
                <RadioGroup onChange={setValue} value={value}>
                    <Stack direction="row">
                        <Radio value="1">First</Radio>
                        <Radio value="2">Second</Radio>
                        <Radio value="3">Third</Radio>
                    </Stack>
                </RadioGroup>
                <Heading>Switch</Heading>
                <FormControl display="flex" alignItems="center">
                    <FormLabel htmlFor="email-alerts" mb="0">Enable email alerts?</FormLabel>
                    <Switch id="email-alerts" />
                </FormControl>
            </Container>
        </Box>
    )
}
