# :warning: Do not commit project files to this branch :warning:

We're aware that this is an orthodox way of doing this.

This `build` branch is only meant to hold the final build of the site,
and is periodically updated from `main`.

### ** Do not merge this to `main` **


##### Why are you doing this?

Because the `Gatsby` version this site was created with is fairly old,
it is simply not worth the time to upgrade the dependencies.
It would make more sense implementing a new website entirely.

But because we are wanting to actually have this site deployed
(to update the old one),
we are forced to do this because Netlify is having trouble
creating the build file.

So we´re forced to `gatsby build` locally and push to this branch.