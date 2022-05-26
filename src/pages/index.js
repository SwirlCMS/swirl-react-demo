import {useEffect} from 'react'
import Head from 'next/head'
import { Button, Text } from '@chakra-ui/react'

export default function Home() {
  useEffect(() => {
    import('epic-cms')
  });
  return (
    <div className="container">
      <Head>
        <title>Basic Chakra app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Button colorScheme='blue' data-epic-cms-id="button1#1234">Button</Button>
        {/* <div className="drop-pad"></div> */}
        <Text data-epic-cms-id="text1#1234">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt tellus sed pretium finibus. Suspendisse euismod magna erat, sed suscipit lacus faucibus id. Phasellus sed feugiat mauris. Maecenas at porttitor nunc, eget tempor justo. Donec ac neque vel eros mollis mattis eget sit amet quam. Cras efficitur massa vitae libero dignissim luctus. Proin vulputate, sapien id aliquet luctus, libero dolor vestibulum eros, vitae suscipit massa dolor in ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi in iaculis elit, nec dapibus ante. Vestibulum lacinia magna in massa gravida dapibus. Aliquam erat volutpat. In sit amet tempor erat, eget dictum turpis. Mauris tempus imperdiet congue. Etiam sed laoreet elit. Ut pretium enim est, et fringilla nunc molestie at. Integer non quam ante.

Nunc lectus tortor, gravida feugiat facilisis non, mattis ut metus. Sed bibendum placerat tristique. Nullam venenatis aliquet leo nec lobortis. Mauris lacinia velit nisl, eu ultricies velit elementum ac. Nullam metus quam, malesuada sagittis mauris a, pharetra tincidunt nulla. Integer consectetur nulla a consequat efficitur. Etiam facilisis nisi ac metus sollicitudin vulputate. Aenean diam nisi, auctor semper vestibulum porta, volutpat vitae neque. Curabitur rutrum auctor vehicula.

Sed porta imperdiet elit in laoreet. In bibendum tempus lorem a aliquet. Cras rutrum egestas turpis, a malesuada magna pellentesque eget. Nunc suscipit nisi bibendum urna vulputate, quis pellentesque lacus fermentum. Duis et consectetur mauris. Mauris et lacus a nulla bibendum semper. Nam enim urna, condimentum eget vestibulum at, pharetra id justo. Nam hendrerit urna quis diam ornare, a sodales libero varius. Integer eu dui in mauris auctor ultrices et quis augue. Sed lobortis augue vel dui sagittis, in faucibus diam vehicula. Aliquam venenatis semper tincidunt. Nunc porttitor odio vel enim rhoncus interdum.
        </Text>
        <epic-cms components={components} />
      </main>

      <style jsx>{`
        
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
