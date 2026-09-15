DROP TRIGGER IF EXISTS on_auth_user_created_grant_admin ON auth.users;
CREATE TRIGGER on_auth_user_created_grant_admin
AFTER INSERT OR UPDATE OF email_confirmed_at, email ON auth.users
FOR EACH ROW
EXECUTE FUNCTION public.grant_admin_for_verified_email();