import { mdiCheckDecagram, mdiUpload } from '@mdi/js'
import { Field, Form, Formik } from 'formik'
import { useAppSelector } from '../../stores/hooks'
import CardBox from './CardBox'
import FormCheckRadio from './FormCheckRadio'
import FormField from './FormField'
import FormFilePicker from './FormFilePicker'
import PillTag from './PillTag'
import UserAvatarCurrentUser from './UserAvatarCurrentUser'

type Props = {
  className?: string
}

const UserCard = ({ className }: Props) => {
  const userName = useAppSelector((state) => state.main.userName)

  return (
    <CardBox className={className}>
      <div className="flex flex-col lg:flex-row items-center justify-around lg:justify-center">
        
        <div className="space-y-3 text-center md:text-left lg:mx-12">
          <div className="flex justify-center md:block">
            <Formik
              initialValues={{
                notifications: ['1'],
              }}
              onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
            >
              <Form>
                <FormCheckRadio type="switch" label="Notifications">
                  <Field type="checkbox" name="notifications" value={'1'} />
                </FormCheckRadio>
              </Form>
            </Formik>
          </div>
          <h1 className="text-2xl">
            Howdy, <b>{userName &&  userName} {!userName && 'Guest'}</b>!
          </h1>
          <p>
            Last login <b>12 mins ago</b> from <b>172.14.17.15</b>
          </p>
          <div className="flex justify-center md:block">
            <PillTag label="Verified" color="info" icon={mdiCheckDecagram} />
          </div>
        </div>

        <div className="space-y-3 text-center md:text-left lg:mx-12">
          <FormField label="Avatar" help="Max 500kb">
            <FormFilePicker label="Upload" color="info" icon={mdiUpload} />
          </FormField>
        </div>
      </div>
    </CardBox>
  )
}

export default UserCard
