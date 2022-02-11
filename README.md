# Examples to showcase Lightning Web Security (beta in Winter '22) features

Lightning Web Security (LWS) is a new client-side security architecture for Lightning Web Components (LWC) that replaces Lightning Locker. LWS is defined by fewer restrictions while preserving the same strong security capabilities of Lightning Locker, such as blocking or modifying behavior of APIs that aren’t secure.

## How is it implemented?

LWS implementation is modeled after the latest TC39 standards that will evolve with browser platforms as time goes by. Components are isolated in their own detached namespace JavaScript sandbox. This lets us expose document, window, and element global objects directly, without opening the door to security threats. LWS alters code running in the JavaScript sandbox to prevent unsafe behavior.

## What can I do with LWS that I couldn’t with Lightning Locker?

With LWS you can:

1. Import and use LWCs from different namespaces via composition or extension.
1. Interact with global objects.
1. Use 3rd party libraries that manipulate global objects.

LWS also provides improved performance compared to Lightning Locker because it doesn’t use secure wrappers which can reduce performance.

## How can I activate it?

You can activate the LWS Beta for your custom LWCs in a Winter ’22 pre-release org. This will affect all your custom components, including those in managed packages. Go to Setup → Session Settings and enable “Use Lightning Web Security (beta) for Lightning web components”.

LWS in setup menu If you don’t have a pre-release org, you can [sign-up](https://www.salesforce.com/form/signup/prerelease-winter22/) for one here before the release date.

## Is this available for Aura?

The LWS Beta (Winter '22) is only available for custom LWCs.

## How can I report issues?

To report issues, give feedback, and ask questions about LWS, go to [this link](https://trailhead.salesforce.com/trailblazer-community/groups/0F930000000PbJaCAK?tab=discussion).

## Where can I learn more?

Take a look at the [LWS announcement](https://help.salesforce.com/s/articleView?language=en_US&type=5&release=234&id=release-notes.rn_lwc_security_intro.htm) in the Winter ’22 release notes.

# Deploying this App

1. Clone the repo:

   ```
   git clone git@github.com:albarivas/lws-examples.git
   ```

1. If you haven't already done so, authorize with your hub org and provide it with an alias (**myhuborg** in the command below). Note it needs to be at least a Winter '22 Dev Hub:

   ```
   sfdx force:auth:web:login -d -a myhuborg
   ```

1. Create a scratch org and provide it with an alias (**lws-examples** in the command below):

   ```
   sfdx force:org:create -s -f config/project-scratch-def.json -a lws-examples
   ```

1. Install [Lightning Messaging Utility](https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3u00000MBecDEAT) package

https://MyDomainName.lightning.force.com/packagingSetupUI/ipLanding.app?apvId=04t5w000003gWWBAA2

1. Push the app to your scratch org:

   ```
   sfdx force:source:push
   ```

1. Assign the **LWS_Examples** permission set to the default user:

   ```
   sfdx force:user:permset:assign -n LWS_Examples
   ```

1. Open the scratch org:

   ```
   sfdx force:org:open
   ```

1. Activate the LWS Beta
   ```
   Setup → Session Settings and enable “Use Lightning Web Security (beta) for Lightning web components”
   ```
