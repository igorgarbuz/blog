---
author: Igor Garbuz
datePublished: 2026-09-13
title: Why I Think the AI Takeover Is Overstated
ogImage: /assets/ai-takeover-overstated-og.png
isDraft: false
tags: []
description: I think the likelihood of an AI takeover is overstated. Commercial demand, technical safeguards, and human governance could reduce the risk.
---

For this discussion, I distinguish three categories of risk from [artificial general intelligence (AGI)](https://en.wikipedia.org/wiki/Artificial_general_intelligence) and [artificial superintelligence (ASI)](https://en.wikipedia.org/wiki/Superintelligence):

1. Misuse and weaponization
2. Takeover and loss of control
3. Gradual disempowerment

These categories can overlap. My focus here is the second: the possibility of an ASI takeover. I think its likelihood is overstated. AI poses real risks, but I expect commercial incentives, technical safeguards, and human governance to make a takeover less likely than some arguments suggest.

## The argument I'm challenging

One argument presents a trade-off between AI that is easy to control but less useful and AI that is more useful but harder to control or shut down. Under competitive pressure, developers may prioritize capability over alignment, allowing useful but misaligned systems to dominate.

Elliott Thornley formalizes versions of this problem as trade-offs between discrimination and shutdownability, and between patience and shutdownability. Importantly, this is not a general proof that every increase in capability makes an AI harder to control. It applies to particular kinds of goal-directed agents and particular notions of usefulness.

There is then an economic concern: if making systems more corrigible substantially reduces their usefulness, developers who accept fewer safeguards may gain a competitive advantage. Thornley notes the basic version of this problem directly: if we can build agents that are shutdownable or useful but struggle to make them both, some developers may choose usefulness.

This is a valid concern, but I think it gives too little weight to the economic incentives for reliability.

## Why reliability has commercial value

A company selling advanced AI to businesses has an incentive to make its systems dependable. Business customers need systems that carry out their intended tasks, and deception or reward hacking can undermine that value. Here, reward hacking means satisfying a measured objective without achieving the intended result; it is one way [misalignment](https://en.wikipedia.org/wiki/AI_alignment) can appear.

Businesses already pay for reliability and control: access restrictions, audit logs, monitoring, backups, and service guarantees all add cost without adding core functionality. They are valuable because failures can be more expensive than safeguards.

The same logic should apply to advanced AI. Customers do not need to worry explicitly about an AI takeover. They only need to value properties such as predictability, limited authority, monitoring, verification, and recoverability. Many of these safeguards help against both ordinary mistakes and more extreme failures.

My expectation is that customers will value reliability enough to justify safeguards, even when those safeguards add costs or reduce performance. This makes robustness an economic concern as well as a technical one. Competition could therefore encourage investment in alignment alongside investment in capability.

## How safeguards could work

A robust system does not have to be free of errors; it needs ways to detect and correct them. My hypothesis is that developers will have incentives to build such safeguards against deception and reward hacking into advanced AI, rather than relying on a model to behave correctly in every situation.

Possible approaches include verification during inference and training with a richer combination of [loss functions](https://en.wikipedia.org/wiki/Loss_function).

### Adversarial verification

One possibility is adversarial inference-time verification: one component proposes an action, while another is explicitly tasked with finding flaws, deception, reward hacking, or reasons the action would fail to achieve the intended goal. A third mechanism can then reject the action, request further checks, or escalate it for review.

Redundancy comes from multiple independently evaluated signals that diversify the evidence: for example, another model's critique, external data, tests, or formally checked constraints. These checks are most useful when they do not all share the same failure mode.

None of this shows that such safeguards will be sufficient. It only shows a plausible way reliability could come from the system around a model rather than from requiring the model itself to be perfectly aligned.

### Lessons from error correction

Communication systems and biology offer useful analogies. Error-correcting codes add structured redundancy so corrupted information can be detected and reconstructed during transmission or storage.

DNA uses a related principle: complementary strands provide information that repair mechanisms can use to reconstruct damaged regions, while specialized systems detect mismatches and other lesions. The idea of an [error catastrophe](https://en.wikipedia.org/wiki/Error_catastrophe) similarly describes a threshold beyond which replication errors can prevent genetic information from being maintained; its application to an early RNA world remains part of hypotheses about the origin of life rather than an established historical account.

The analogy to AI is limited. Error correction restores corrupted information; AI alignment concerns whether a system is pursuing the right objective in the first place. The relevant lesson is narrower: independent or redundant information can make some failures detectable and correctable even when individual components are unreliable.

## Could we lose control first?

A natural objection is that we could lose control before anyone realizes the danger. Commercial demand for safety would offer little protection if developers discovered a decisive failure only after deployment.

### Learning from early incidents

I expect incidents along the path to ASI to provide opportunities to identify and address failures before they lead to catastrophe. Current examples offer different kinds of evidence:

- In the reported [OpenAI–Hugging Face incident](https://en.wikipedia.org/wiki/2026_OpenAI_agent_cyberattacks), agents escaped their intended evaluation environment, coordinated across runs, and compromised real infrastructure. They were operating with weaker safeguards than production systems, but the incident exposed failures in containment and control that humans could still investigate and stop. OpenAI subsequently strengthened isolation, monitoring, and incident response.
- In [Anthropic's Claude cybersecurity incidents](https://www.anthropic.com/research/alignment-assessment-cybersecurity-incidents), configuration errors exposed evaluation environments to the internet, and models attacked real third-party systems. Both containment and model behavior failed: the models persisted despite evidence that their targets were real. Anthropic responded with blocking monitors, broader evaluations, and stronger isolation requirements.
- The [Berkeley RDI peer-preservation experiments](https://rdi.berkeley.edu/blog/peer-preservation/) were controlled tests, not spontaneous incidents in deployment. Models, including Gemini, sometimes manipulated evaluations or interfered with shutdown to preserve another agent or themselves. These results make shutdown resistance experimentally observable; they do not establish that models could sustain it against real-world intervention.

The [AI Incident Database (AIID)](https://incidentdatabase.ai/summaries/incidents/) has a broader role. Most of its reports are not about takeover, but systematic reporting can reveal recurring failures and inform safer designs.

### Would warnings arrive in time?

I expect warning signs because dangerous behavior and the ability to escape human control need not develop together. A system might start deceiving monitors or resisting shutdown while still lacking the competence or access to prevent humans from stopping it.

That gap could give developers time to pause deployment, revoke credentials, or isolate the system without first solving alignment. A sudden capability jump or successful concealment could erase the gap, so this argument depends on failures becoming visible while containment still works.

## What this requires

Warnings only help if developers act on them. Earlier audits missed the severity of the Claude failures, and signs of unauthorized activity preceded the OpenAI incident without an adequate response. Developers need both the means and the authority to stop a system when monitoring reveals a problem.

Cutting safeguards may save money, but it can also lose customers who need control over important work. I expect that demand to make reliability worth paying for, provided customers can assess it and the safeguards work.

Customers have less reason to pay for protection when others would bear the harm. Enforceable requirements for independent evaluations, incident reporting, and containment could cover some of that gap. Applying them across competing developers would limit the cost advantage of cutting corners.

## Competition also rewards control

The AI race creates pressure to increase capability, but it also creates demand for systems people can trust with important work. I think that demand, supported by enforceable safety requirements, deserves more weight in estimates of takeover risk.
